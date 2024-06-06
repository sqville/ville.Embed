/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Wallpaper",
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

   var pathdregular = "M3 6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6a2 2 0 0 0-2 2v2.5a.5.5 0 0 1-1 0V6Zm8-2.5c0-.28.22-.5.5-.5H14a3 3 0 0 1 3 3v2.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1-.5-.5ZM3.5 11c.28 0 .5.22.5.5V14c0 .37.1.72.28 1.02l4.48-4.49c.69-.68 1.8-.68 2.48 0l4.48 4.49A2 2 0 0 0 16 14v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3h-2.5a.5.5 0 0 1 0-1H14a2 2 0 0 0 1.02-.28l-4.49-4.48a.75.75 0 0 0-1.06 0l-4.49 4.48A2 2 0 0 0 6 16h2.5a.5.5 0 0 1 0 1H6a3 3 0 0 1-3-3v-2.5c0-.28.22-.5.5-.5Zm9-4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-1.5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z";
   var pathdfilled = "M3 6a3 3 0 0 1 3-3h2.25a.75.75 0 0 1 0 1.5H6c-.83 0-1.5.67-1.5 1.5v2.25a.75.75 0 0 1-1.5 0V6Zm8-2.25c0-.41.34-.75.75-.75H14a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-1.5 0V6c0-.83-.67-1.5-1.5-1.5h-2.25a.75.75 0 0 1-.75-.75ZM3.75 11c.41 0 .75.34.75.75V14c0 .13.02.26.05.39l3.68-3.68a2.5 2.5 0 0 1 3.54 0l3.68 3.68c.03-.13.05-.26.05-.39v-2.25a.75.75 0 0 1 1.5 0V14a3 3 0 0 1-3 3h-2.25a.75.75 0 0 1 0-1.5H14c.13 0 .26-.02.39-.05l-3.68-3.68a1 1 0 0 0-1.42 0l-3.68 3.68c.13.03.26.05.39.05h2.25a.75.75 0 0 1 0 1.5H6a3 3 0 0 1-3-3v-2.25c0-.41.34-.75.75-.75ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z";
   
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