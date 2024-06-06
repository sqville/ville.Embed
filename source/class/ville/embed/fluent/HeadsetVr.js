/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HeadsetVr",
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

   var pathdregular = "M10.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm6.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM8.5 3a.5.5 0 0 0-.5.5V5H5.25a3.25 3.25 0 0 0-3.24 3H1.5a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5H2v1.75C2 15.55 3.46 17 5.25 17h1.6c.87 0 1.7-.34 2.3-.95l.6-.6a.35.35 0 0 1 .5 0l.59.6c.6.6 1.44.95 2.3.95h1.61c1.8 0 3.25-1.46 3.25-3.25V12h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H18a3.25 3.25 0 0 0-3.25-3H12V3.5a.5.5 0 0 0-.5-.5h-3ZM17 8.25v5.5c0 1.24-1 2.25-2.25 2.25h-1.61c-.6 0-1.17-.24-1.6-.66l-.59-.6a1.35 1.35 0 0 0-1.9 0l-.6.6c-.42.42-1 .66-1.6.66h-1.6C4.01 16 3 15 3 13.75v-5.5C3 7.01 4 6 5.25 6h9.5C15.99 6 17 7 17 8.25Z";
   var pathdfilled = "M8 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V5h2.75a3.25 3.25 0 0 1 3.24 3h.51c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5H18v1.75c0 1.8-1.46 3.25-3.25 3.25h-1.61c-.86 0-1.7-.34-2.3-.95l-.6-.6a.35.35 0 0 0-.49 0l-.6.6c-.6.6-1.43.95-2.3.95h-1.6A3.25 3.25 0 0 1 2 13.75V12h-.5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5H2c.14-1.68 1.54-3 3.25-3H8V3.5Zm2 5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 10.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Zm7.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z";
   
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