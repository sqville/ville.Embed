/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShareScreenPersonP",
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

   var pathdregular = "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v3.6c-.26-.4-.6-.72-1-.95V6.75C17 5.78 16.22 5 15.25 5H4.75C3.78 5 3 5.78 3 6.75v6.5c0 .97.78 1.75 1.75 1.75h6.75c-.22.3-.38.63-.45 1h-6.3A2.75 2.75 0 0 1 2 13.25v-6.5ZM15.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.25 3.5-2.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.25 1 2.5 3.5 2.5Zm-9-12a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V11h1a2 2 0 1 0 0-4H6.5ZM8 10H7V8h1a1 1 0 0 1 0 2Z";
   var pathdfilled = "M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3.34a3 3 0 1 0-4.73 3.67c-1.1.1-2 .92-2.22 1.99H5a3 3 0 0 1-3-3V7Zm4 .5v5a.5.5 0 0 0 1 0V11h1a2 2 0 1 0 0-4H6.5a.5.5 0 0 0-.5.5ZM7 10h1a1 1 0 0 0 0-2H7v2Zm10.5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   
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