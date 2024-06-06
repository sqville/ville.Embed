/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VoicemailArrowForward",
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

   var pathdregular = "M8.73 9A2 2 0 1 1 7 8h6a2 2 0 0 1 1.74 1 5.6 5.6 0 0 0-1.3.1 1 1 0 0 0-1.33.45c-.4.19-.76.42-1.1.7A2.02 2.02 0 0 1 11.27 9H8.73ZM6 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm11-4v3.6c.36.18.7.4 1 .66V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2c-.08-.32-.15-.66-.18-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-7 8.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 0 1 0 .7L16.1 16.1a.5.5 0 0 1-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.54l-.9-.9a.5.5 0 0 1 0-.7Z";
   var pathdfilled = "M6 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm7-2a2 2 0 0 1 1.74 1c1.23.06 2.37.52 3.26 1.26V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.2a5.5 5.5 0 0 1 1.81-5.76A2.02 2.02 0 0 1 11.27 9H8.73A2 2 0 1 1 7 8h6Zm-3 6.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 0 1 0 .7L16.1 16.1a.5.5 0 0 1-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.54l-.9-.9a.5.5 0 0 1 0-.7Z";
   
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