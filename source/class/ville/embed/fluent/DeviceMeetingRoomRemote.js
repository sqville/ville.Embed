/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DeviceMeetingRoomRemote",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M3.66 4.95A2.5 2.5 0 0 1 6.1 3h7.8c1.17 0 2.18.8 2.44 1.95l1.6 7A2.5 2.5 0 0 1 15.48 15H9v-1h6.5c.96 0 1.67-.9 1.46-1.83l-1.6-7A1.5 1.5 0 0 0 13.9 4H6.1c-.7 0-1.31.48-1.47 1.17L4.22 7H3.5c-.1 0-.21 0-.31.02l.47-2.07ZM8.95 17h5.55a.5.5 0 0 0 0-1H9v.5c0 .17-.02.34-.05.5ZM5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 9.5C2 8.67 2.67 8 3.5 8h3C7.33 8 8 8.67 8 9.5v7c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 2 16.5v-7ZM3.5 9a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3Z";
   var pathdfilled = "M3.66 4.95A2.5 2.5 0 0 1 6.1 3h7.8c1.17 0 2.18.8 2.44 1.95l1.6 7A2.5 2.5 0 0 1 15.48 15H9V9.5A2.5 2.5 0 0 0 6.5 7h-3c-.1 0-.21 0-.31.02l.47-2.07ZM9 16.5c0 .17-.02.34-.05.5h5.55a.5.5 0 0 0 0-1H9v.5ZM5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 9.5C2 8.67 2.67 8 3.5 8h3C7.33 8 8 8.67 8 9.5v7c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 2 16.5v-7ZM3.5 9a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});