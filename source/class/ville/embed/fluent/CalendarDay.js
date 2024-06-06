/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarDay",
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

   var pathdregular = "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5Zm-1.78 5c.44 0 .6.05.77.13.16.1.29.22.38.38.08.16.13.33.13.77v2.44c0 .44-.05.6-.13.77a.9.9 0 0 1-.38.38c-.16.08-.33.13-.77.13H7.28c-.44 0-.6-.05-.77-.13a.9.9 0 0 1-.38-.38c-.08-.16-.13-.33-.13-.77v-2.44c0-.44.05-.6.13-.77a.9.9 0 0 1 .38-.38c.16-.08.33-.13.77-.13h5.44Zm.2 1H7V13h5.98v-2.98h-.08Zm.58-4a.5.5 0 0 1 .09 1H6.5a.5.5 0 0 1-.09-1h7.09Z";
   var pathdfilled = "M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-1.78 6H7.28c-.44 0-.6.05-.77.13a.9.9 0 0 0-.38.38c-.07.14-.12.29-.13.62v2.59c0 .44.05.6.13.77.1.16.22.29.38.38.14.07.29.12.62.13H12.72c.44 0 .6-.05.77-.13a.9.9 0 0 0 .38-.38c.07-.14.12-.29.13-.62v-2.59c0-.44-.05-.6-.13-.77a.9.9 0 0 0-.38-.38 1.24 1.24 0 0 0-.62-.13h-.15Zm.2 1h.07V13H7.01v-2.98h5.9Zm.58-4H6.41a.5.5 0 0 0 0 1h7.18a.5.5 0 0 0 0-1h-.09Z";
   
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