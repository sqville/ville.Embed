/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Multiplier18x",
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

   var pathdregular = "M4.66 6.03c.2.06.34.26.34.47v7a.5.5 0 0 1-1 0V7.96a6 6 0 0 1-1.24.97.5.5 0 0 1-.52-.86c.94-.56 1.31-1.1 1.64-1.57l.22-.3a.5.5 0 0 1 .56-.17ZM13 8c0 .59-.27 1.09-.69 1.44.7.44 1.19 1.18 1.19 2.06 0 1.43-1.29 2.5-2.75 2.5S8 12.93 8 11.5c0-.88.48-1.62 1.19-2.06A1.87 1.87 0 0 1 8.5 8c0-1.17 1.08-2 2.25-2S13 6.83 13 8Zm-2.25-1c-.77 0-1.25.52-1.25 1s.48 1 1.25 1S12 8.48 12 8s-.48-1-1.25-1ZM9 11.5c0 .77.73 1.5 1.75 1.5s1.75-.73 1.75-1.5-.73-1.5-1.75-1.5S9 10.73 9 11.5Zm5.15-1.35c.2-.2.5-.2.7 0L16 11.29l1.15-1.14a.5.5 0 0 1 .7.7L16.71 12l1.14 1.15a.5.5 0 0 1-.7.7L16 12.71l-1.15 1.14a.5.5 0 0 1-.7-.7L15.29 12l-1.14-1.15a.5.5 0 0 1 0-.7ZM7 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z";
   var pathdfilled = "M4.46 6.03c.32.1.54.39.54.72v6.5a.75.75 0 0 1-1.5 0V8.81c-.24.19-.52.38-.86.58a.75.75 0 0 1-.78-1.28c.58-.35.9-.62 1.13-.87.22-.24.36-.47.58-.81l.04-.08a.75.75 0 0 1 .85-.32Zm8.79 2.22c0 .58-.23 1.07-.59 1.45.51.44.84 1.07.84 1.8 0 1.47-1.33 2.5-2.75 2.5S8 12.97 8 11.5c0-.73.33-1.36.84-1.8a2.08 2.08 0 0 1-.59-1.45C8.25 6.9 9.48 6 10.75 6s2.5.9 2.5 2.25Zm-2.5-.75c-.66 0-1 .44-1 .75s.34.75 1 .75c.66 0 1-.44 1-.75s-.34-.75-1-.75Zm-1.25 4c0 .46.46 1 1.25 1s1.25-.54 1.25-1c0-.46-.46-1-1.25-1s-1.25.54-1.25 1Zm4.72-1.28c.3-.3.77-.3 1.06 0l.72.72.72-.72a.75.75 0 1 1 1.06 1.06l-.72.72.72.72a.75.75 0 1 1-1.06 1.06l-.72-.72-.72.72a.75.75 0 1 1-1.06-1.06l.72-.72-.72-.72a.75.75 0 0 1 0-1.06ZM7 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z";
   
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